import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const AppShowcaseSection = (): JSX.Element => {
  // Data for the table rows
  const tableData = [
    {
      id: "01",
      avatar: "/ellipse-4.png",
      username: "Lorem Ipsum",
      inviteCount: "100K+",
      tierBadge: "/gold-tier-achievement-badges-3d-illustration-png-1.png",
    },
    {
      id: "02",
      avatar: "/ellipse-5.png",
      username: "Dolor Site",
      inviteCount: "99K+",
      tierBadge: "/gold-tier-achievement-badges-3d-illustration-png-5.png",
    },
    {
      id: "03",
      avatar: "/ellipse-6.png",
      username: "Obama",
      inviteCount: "98K+",
      tierBadge: "/gold-tier-achievement-badges-3d-illustration-png-2.png",
    },
    {
      id: "04",
      avatar: "/ellipse-7.png",
      username: "Tony",
      inviteCount: "97.8K+",
      tierBadge: "/gold-tier-achievement-badges-3d-illustration-png-6.png",
    },
    {
      id: "05",
      avatar: "/ellipse-8.png",
      username: "Tenos",
      inviteCount: "97.5K+",
      tierBadge: "/gold-tier-achievement-badges-3d-illustration-png-3.png",
    },
  ];

  return (
    <div className="relative w-full max-w-[764px] mx-auto">
      <Card className="bg-[#1c1e20] rounded-[32.93px] overflow-hidden shadow-[8.23px_0px_0.82px_#0000000a,0px_1.65px_4.94px_#0000001a,0px_13.17px_19.76px_#0000001a]">
        {/* Browser-like header */}
        <div className="relative h-[69px] p-5">
          {/* Window control buttons */}
          <div className="inline-flex h-[19px] items-center gap-[11.1px] absolute top-[25px] left-[37px]">
            <div className="relative w-[13.9px] h-[13.9px] bg-[#f45952] rounded-[6.95px]" />
            <div className="relative w-[13.9px] h-[13.9px] bg-[#dfb94e] rounded-[6.95px]" />
            <div className="relative w-[13.9px] h-[13.9px] bg-[#5ab748] rounded-[6.95px]" />
          </div>

          {/* Address bar */}
          <div className="absolute w-[442px] h-[30px] top-[21px] left-[148px] bg-[#26282b] rounded-[6.59px]">
            <div className="absolute top-1.5 left-2.5 [font-family:'DM_Sans',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
              BONBON
            </div>
          </div>
        </div>

        {/* Table content */}
        <CardContent className="p-0">
          <div className="bg-[#26292c] rounded-[0px_0px_32.93px_32.93px] p-5">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#ffffff05] rounded-[20px]">
                  <TableHead className="[font-family:'OwnersTRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0.72px]">
                    No
                  </TableHead>
                  <TableHead className="[font-family:'OwnersTRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0.72px]">
                    Avatar
                  </TableHead>
                  <TableHead className="[font-family:'OwnersTRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0.72px]">
                    Username
                  </TableHead>
                  <TableHead className="[font-family:'OwnersTRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0.72px]">
                    Invite count
                  </TableHead>
                  <TableHead className="[font-family:'OwnersTRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0.72px]">
                    Tier badge
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.id} className="h-[84px]">
                    <TableCell className="[font-family:'OwnersTRIAL-Regular',Helvetica] font-normal text-white text-base tracking-[0.64px]">
                      {row.id}
                    </TableCell>
                    <TableCell>
                      <img
                        className="w-14 h-14 object-cover rounded-full"
                        alt="User avatar"
                        src={row.avatar}
                      />
                    </TableCell>
                    <TableCell className="[font-family:'OwnersTRIAL-Regular',Helvetica] font-normal text-white text-base tracking-[0.64px]">
                      {row.username}
                    </TableCell>
                    <TableCell className="[font-family:'OwnersTRIAL-Regular',Helvetica] font-normal text-white text-base tracking-[0.64px]">
                      {row.inviteCount}
                    </TableCell>
                    <TableCell>
                      <img
                        className="w-[60px] h-[60px]"
                        alt="Gold tier"
                        src={row.tierBadge}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
