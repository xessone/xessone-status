import { StatusNavbar } from "@/components/status-navbar";
import { StatusHeader } from "@/components/status-header";
import { ServiceStatus } from "@/components/service-status";
import { NodeGrid } from "@/components/node-grid";
import { UptimeChart } from "@/components/uptime-chart";
import { IncidentLog } from "@/components/incident-log";
import { StatusFooter } from "@/components/status-footer";

export default function StatusPage() {
  return (
    <div className="min-h-screen flex flex-col dot-grid">
      <StatusNavbar />
      <StatusHeader />
      <ServiceStatus />
      <NodeGrid />
      <UptimeChart />
      <IncidentLog />
      <StatusFooter />
    </div>
  );
}
