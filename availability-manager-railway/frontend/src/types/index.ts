export interface User {
  id: string;
  username: string;
  displayName: string;
}

export interface CalendarEvent {
  id: string;
  userId: string;
  title: string;
  start: string;
  end: string;
  type: 'busy' | 'meeting' | 'focus' | 'break';
  isPublic: boolean;
  color: string;
  createdAt: string;
}

export interface Task {
  id: string;
  userId: string;
  title: string;
  description: string;
  dueDate: string | null;
  priority: 'low' | 'medium' | 'high';
  assignerName: string;
  urgent: boolean;
  completed: boolean;
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  message: string;
  type: 'task' | 'urgent';
  taskId?: string;
  read: boolean;
  createdAt: string;
}

export interface PublicProfile {
  user: User;
  status: string;
  currentEvent: CalendarEvent | null;
  upcomingEvents: CalendarEvent[];
}
