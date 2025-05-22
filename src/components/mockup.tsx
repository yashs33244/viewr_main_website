import React, { useState, useEffect } from "react";
import {
  Camera,
  Users,
  Shield,
  AlertTriangle,
  Clock,
  Activity,
  Eye,
  Database,
  FileText,
  Play,
  Pause,
} from "lucide-react";

const ChartBar = ({ height, delay = 0 }: any) => (
  <div
    className="bg-gradient-to-t from-blue-500 to-purple-400 rounded-t-sm transition-all duration-1000 ease-out w-3"
    style={{
      height: height,
      animationDelay: `${delay}s`,
      animation: `slideUp 1s ease-out ${delay}s both`,
    }}
  />
);

const CameraFeed = ({ id, location, status, detectedPerson }: any) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive((prev) => !prev);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/40 rounded-lg overflow-hidden border border-white/10">
      <div className="flex items-center justify-between p-2 bg-black/60">
        <div className="flex items-center gap-2">
          <Camera size={14} className="text-blue-400" />
          <span className="text-xs text-white font-medium">{location}</span>
        </div>
        <div
          className={`w-2 h-2 rounded-full ${
            status === "active" ? "bg-green-400" : "bg-red-400"
          }`}
        />
      </div>
      <div className="relative h-24 bg-gray-900">
        {/* Mock video feed */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
        </div>

        {/* Person detection overlay */}
        {detectedPerson && (
          <div className="absolute top-2 left-2 right-2">
            <div
              className={`border-2 border-yellow-400 rounded transition-opacity duration-500 ${
                isActive ? "opacity-100" : "opacity-50"
              }`}
              style={{ width: "40px", height: "50px" }}
            >
              <div className="absolute -top-6 left-0 bg-yellow-400 text-black text-xs px-1 rounded">
                {detectedPerson}
              </div>
            </div>
          </div>
        )}

        {/* Recording indicator */}
        <div className="absolute top-2 right-2 flex items-center gap-1">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-xs text-white">REC</span>
        </div>
      </div>
    </div>
  );
};

const AlertItem = ({ type, message, time, severity }: any) => (
  <div
    className={`flex items-center gap-3 p-2 rounded-lg ${
      severity === "high"
        ? "bg-red-500/20 border border-red-500/30"
        : severity === "medium"
        ? "bg-yellow-500/20 border border-yellow-500/30"
        : "bg-blue-500/20 border border-blue-500/30"
    }`}
  >
    <AlertTriangle
      size={16}
      className={
        severity === "high"
          ? "text-red-400"
          : severity === "medium"
          ? "text-yellow-400"
          : "text-blue-400"
      }
    />
    <div className="flex-1">
      <div className="text-sm text-white">{message}</div>
      <div className="text-xs text-gray-400">{time}</div>
    </div>
  </div>
);

const PersonCard = ({ name, lastSeen, confidence, image }: any) => (
  <div className="flex items-center gap-3 p-2 bg-black/30 rounded-lg">
    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
      <Users size={16} className="text-white" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="text-sm text-white font-medium truncate">{name}</div>
      <div className="text-xs text-gray-400">{lastSeen}</div>
      <div className="text-xs text-green-400">{confidence}% match</div>
    </div>
  </div>
);

export default function SecurityDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeCameras, setActiveCameras] = useState(8);
  const [totalDetections, setTotalDetections] = useState(247);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalDetections((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm shadow-2xl border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>

      {/* Header bar */}
      <div className="p-4 border-b border-white/10 flex items-center gap-2 bg-black/60">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <div className="flex-1 flex justify-center">
          <div className="text-xs bg-black/40 px-3 py-1 rounded-full text-purple-300 flex items-center gap-2">
            <Shield size={12} />
            AI Security Control Center
          </div>
        </div>
        <div className="text-xs text-gray-400">
          {currentTime.toLocaleTimeString()}
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="p-4 space-y-4 h-[600px] overflow-hidden">
        {/* Status Overview */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-black/30 rounded-lg p-3 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <Camera size={16} className="text-blue-400" />
              <span className="text-xs text-gray-300">Active Cameras</span>
            </div>
            <div className="text-2xl text-white font-bold">{activeCameras}</div>
            <div className="text-xs text-green-400">All systems online</div>
          </div>

          <div className="bg-black/30 rounded-lg p-3 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <Eye size={16} className="text-purple-400" />
              <span className="text-xs text-gray-300">Today's Detections</span>
            </div>
            <div className="text-2xl text-white font-bold">
              {totalDetections}
            </div>
            <div className="text-xs text-green-400">+12% from yesterday</div>
          </div>

          <div className="bg-black/30 rounded-lg p-3 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <Database size={16} className="text-green-400" />
              <span className="text-xs text-gray-300">Known Persons</span>
            </div>
            <div className="text-2xl text-white font-bold">1,247</div>
            <div className="text-xs text-blue-400">Database active</div>
          </div>

          <div className="bg-black/30 rounded-lg p-3 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={16} className="text-yellow-400" />
              <span className="text-xs text-gray-300">Active Alerts</span>
            </div>
            <div className="text-2xl text-white font-bold">3</div>
            <div className="text-xs text-yellow-400">Requires attention</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Live Camera Feeds */}
          <div className="col-span-8 bg-black/30 rounded-lg p-4 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-medium flex items-center gap-2">
                <Camera size={18} />
                Live Camera Feeds
              </h3>
              <div className="flex items-center gap-2">
                <button className="p-1 rounded bg-green-500/20 text-green-400">
                  <Play size={14} />
                </button>
                <button className="p-1 rounded bg-gray-500/20 text-gray-400">
                  <Pause size={14} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <CameraFeed
                id="cam-001"
                location="Main Entrance"
                status="active"
                detectedPerson="John Smith"
              />
              <CameraFeed
                id="cam-002"
                location="Parking Lot A"
                status="active"
                detectedPerson="Unknown"
              />
              <CameraFeed
                id="cam-003"
                location="Reception Area"
                status="active"
                detectedPerson={null}
              />
              <CameraFeed
                id="cam-004"
                location="Corridor B"
                status="active"
                detectedPerson="Sarah Johnson"
              />
              <CameraFeed
                id="cam-005"
                location="Emergency Exit"
                status="active"
                detectedPerson={null}
              />
              <CameraFeed
                id="cam-006"
                location="Server Room"
                status="active"
                detectedPerson="Mike Wilson"
              />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4 space-y-4">
            {/* Recent Alerts */}
            <div className="bg-black/30 rounded-lg p-4 border border-white/10">
              <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                <AlertTriangle size={18} />
                Recent Alerts
              </h3>
              <div className="space-y-2">
                <AlertItem
                  type="person"
                  message="Unknown person detected at Main Entrance"
                  time="2 min ago"
                  severity="high"
                />
                <AlertItem
                  type="access"
                  message="After-hours access in Parking Lot A"
                  time="15 min ago"
                  severity="medium"
                />
                <AlertItem
                  type="system"
                  message="Camera #3 back online"
                  time="1 hour ago"
                  severity="low"
                />
              </div>
            </div>

            {/* Recognized Persons */}
            <div className="bg-black/30 rounded-lg p-4 border border-white/10">
              <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                <Users size={18} />
                Recently Identified
              </h3>
              <div className="space-y-2">
                <PersonCard
                  name="John Smith"
                  lastSeen="Main Entrance - 2m ago"
                  confidence={98}
                />
                <PersonCard
                  name="Sarah Johnson"
                  lastSeen="Corridor B - 5m ago"
                  confidence={95}
                />
                <PersonCard
                  name="Mike Wilson"
                  lastSeen="Server Room - 12m ago"
                  confidence={92}
                />
              </div>
            </div>

            {/* Scheduled Reports */}
            <div className="bg-black/30 rounded-lg p-4 border border-white/10">
              <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                <FileText size={18} />
                Scheduled Reports
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-black/40 rounded">
                  <div>
                    <div className="text-sm text-white">
                      Daily Security Report
                    </div>
                    <div className="text-xs text-gray-400">Next: 6:00 AM</div>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between p-2 bg-black/40 rounded">
                  <div>
                    <div className="text-sm text-white">Weekly Analysis</div>
                    <div className="text-xs text-gray-400">
                      Next: Sunday 8:00 PM
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between p-2 bg-black/40 rounded">
                  <div>
                    <div className="text-sm text-white">
                      Person Activity Log
                    </div>
                    <div className="text-xs text-gray-400">Next: 11:59 PM</div>
                  </div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detection Activity Chart */}
        <div className="bg-black/30 rounded-lg p-4 border border-white/10">
          <h3 className="text-white font-medium mb-4 flex items-center gap-2">
            <Activity size={18} />
            Detection Activity (Last 24 Hours)
          </h3>
          <div className="flex items-end justify-center gap-1 h-32">
            <ChartBar height="40%" delay={0} />
            <ChartBar height="60%" delay={0.1} />
            <ChartBar height="30%" delay={0.2} />
            <ChartBar height="80%" delay={0.3} />
            <ChartBar height="50%" delay={0.4} />
            <ChartBar height="70%" delay={0.5} />
            <ChartBar height="45%" delay={0.6} />
            <ChartBar height="90%" delay={0.7} />
            <ChartBar height="35%" delay={0.8} />
            <ChartBar height="65%" delay={0.9} />
            <ChartBar height="55%" delay={1.0} />
            <ChartBar height="75%" delay={1.1} />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>12 AM</span>
            <span>6 AM</span>
            <span>12 PM</span>
            <span>6 PM</span>
            <span>12 AM</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            height: 0;
          }
          to {
            height: var(--target-height);
          }
        }
      `}</style>
    </div>
  );
}
