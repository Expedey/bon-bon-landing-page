import { useState, useEffect, useCallback } from 'react';
import { LeaderboardService, LeaderboardEntry } from '@/services/leaderboardService';

interface UseLeaderboardReturn {
  leaderboard: LeaderboardEntry[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export const useLeaderboard = (limit: number = 10): UseLeaderboardReturn => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLeaderboard = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await LeaderboardService.getLeaderboard(limit);
      setLeaderboard(data);
    } catch (err) {
      console.error('Error fetching leaderboard:', err);
      setError('Failed to load leaderboard data');
    } finally {
      setLoading(false);
    }
  }, [limit]);

  const refresh = useCallback(async () => {
    await fetchLeaderboard();
  }, [fetchLeaderboard]);

  useEffect(() => {
    fetchLeaderboard();

    // Set up real-time subscription
    const unsubscribe = LeaderboardService.subscribeToLeaderboardUpdates((data) => {
      setLeaderboard(data);
    });

    return () => {
      unsubscribe();
    };
  }, [fetchLeaderboard]);

  return {
    leaderboard,
    loading,
    error,
    refresh,
  };
}; 