import React from 'react';
import {
  CalendarIcon,
  UsersIcon,
  FileTextIcon,
  HandshakeIcon } from
'lucide-react';
import { StatCard } from '../../components/admin/StatCard';
import { ImpactChart } from '../../components/admin/ImpactChart';
import { QuickActions } from '../../components/admin/QuickActions';
import { RecentEvents } from '../../components/admin/RecentEvents';
import { ActivityFeed } from '../../components/admin/ActivityFeed';
import { RecentArticles } from '../../components/admin/RecentArticles';
import { RecentInscriptions } from '../../components/admin/RecentInscriptions';
export function Dashboard() {
  return (
    <div className="space-y-6 pb-8">
      {/* Row 1: Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard
          title="Événements"
          value="47"
          change={12}
          icon={CalendarIcon}
          color="#0099DC"
          delay={0} />
        
        <StatCard
          title="Participants"
          value="1,284"
          change={24}
          icon={UsersIcon}
          color="#6CC24A"
          delay={0.1} />
        
        <StatCard
          title="Articles"
          value="32"
          change={8}
          icon={FileTextIcon}
          color="#8B5CF6"
          delay={0.2} />
        
        <StatCard
          title="Partenaires"
          value="15"
          change={-2}
          icon={HandshakeIcon}
          color="#FFC107"
          delay={0.3} />
        
      </div>

      {/* Row 2: Chart & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ImpactChart />
        </div>
        <div className="lg:col-span-1">
          <QuickActions />
        </div>
      </div>

      {/* Row 3: Events & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentEvents />
        </div>
        <div className="lg:col-span-1">
          <ActivityFeed />
        </div>
      </div>

      {/* Row 4: Articles & Inscriptions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <RecentArticles />
        </div>
        <div>
          <RecentInscriptions />
        </div>
      </div>
    </div>);

}