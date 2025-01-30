"use client"

import type * as React from "react"
import { Menu, Newspaper, Server, Heart, TrendingUp, Sparkles, Hourglass, Zap, Activity, PieChart, Gauge, Cloudy, Flag, Gamepad2, Database, Map, Cpu, LineChart, BookOpen, Bot, Settings2, SquareTerminal } from "lucide-react"

import { NavMain } from "./nav-main"
import { NavAdmin } from "./nav-admin"
import { Sidebar, SidebarContent, SidebarRail, SidebarTrigger } from '@/components/ui/sidebar';

// This is sample data.
const data = {
  navMain: [
    {
      title: "Updates",
      url: "#",
      icon: Newspaper,
      isActive: true,
    },
    {
      title: "Servers",
      url: "#",
      icon: Server,
      isActive: true,
      items: [
        {
          title: "Featured",
          url: "#",
          icon: Heart,
        },
        {
          title: "Most Popular",
          url: "#",
          icon: TrendingUp,
        },
        {
          title: "Newest",
          url: "#",
          icon: Sparkles,
        },
        {
          title: "Oldest",
          url: "#",
          icon: Hourglass,
        },
      ],
    },
    {
      title: "Status",
      url: "#",
      icon: Zap,
      items: [
        {
          title: "Activity",
          url: "#",
          icon: Activity,
        },
        {
          title: "Statistics",
          url: "#",
          icon: PieChart,
        },
      ],
    },
  ],
  navAdmin: [
    {
      title: "Dashboard",
      url: "#",
      icon: Gauge,
      isActive: true,
      items: [
        {
          title: "Cloud",
          url: "#",
          icon: Cloudy,
        },
        {
          title: "Reports",
          url: "#",
          icon: Flag,
        },
        {
          title: "Game Services",
          url: "#",
          icon: Gamepad2,
        },
      ],
    },
    {
      title: "Servers",
      url: "#",
      icon: Server,
      items: [
        {
          title: "Maps",
          url: "#",
          icon: Map,
        },
        {
          title: "Mods",
          url: "#",
          icon: Cpu,
        },
        {
          title: "Analytics",
          url: "#",
          icon: LineChart,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarTrigger/>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavAdmin items={data.navAdmin} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

