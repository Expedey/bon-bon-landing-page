import { supabase } from '@/lib/supabase';

export interface LeaderboardEntry {
  id: string;
  username: string;
  referral_code: string;
  total_referrals: number;
  rank: number;
  avatar_image_url?: string | null;
}

export interface LeaderboardResponse {
  success: boolean;
  data: LeaderboardEntry[];
  count: number;
  limit: number;
  timestamp: string;
}

export class LeaderboardService {
  /**
   * Fetches leaderboard data from the API
   * @param limit - Number of top users to return (default: 10)
   * @returns Promise with leaderboard data
   */
  static async getLeaderboard(limit: number = 5): Promise<LeaderboardEntry[]> {
    try {
      // First try to fetch from local API if available
      const response = await fetch(`/api/leaderboard?limit=${limit}`);
      
      if (response.ok) {
        const data: LeaderboardResponse = await response.json();
        return data.data;
      }
      
      // Fallback to direct Supabase query
      const { data, error } = await supabase
        .from("leaderboard")
        .select("*")
        .order("rank", { ascending: true })
        .limit(limit);

      if (error) {
        console.error("[LeaderboardService] Error fetching leaderboard:", error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error("[LeaderboardService] Error in getLeaderboard:", error);
      return [];
    }
  }

  /**
   * Subscribes to real-time leaderboard updates
   * @param callback - Function to call when data changes
   * @returns Unsubscribe function
   */
  static subscribeToLeaderboardUpdates(callback: (data: LeaderboardEntry[]) => void) {
    const channel = supabase
      .channel('leaderboard-updates')
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'users' 
        }, 
        async () => {
          // Refresh leaderboard data when users table changes
          const data = await this.getLeaderboard(5);
          callback(data);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }

  /**
   * Gets tier badge based on referral count
   * @param referralCount - Number of referrals
   * @returns Badge image path
   */
  static getTierBadge(referralCount: number): string {
    if (referralCount >= 10) {
      return "/images/gold-badge.svg";
    } else if (referralCount >= 5) {
      return "/images/silver-badge.svg";
    } else if (referralCount >= 1) {
      return "/images/iron-badge.svg";
    } else {
      return "/images/iron-badge.svg";
    }
  }

  /**
   * Formats referral count for display
   * @param count - Raw referral count
   * @returns Formatted string
   */
  static formatReferralCount(count: number): string {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K+`;
    }
    return count.toString();
  }
} 