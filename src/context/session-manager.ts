import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

export interface SessionEntry {
  timestamp: Date;
  command: string;
  result: string;
  agentType: string;
}

export class SessionManager {
  private sessionFile: string;
  private sessionHistory: SessionEntry[] = [];

  constructor() {
    const homeDir = os.homedir();
    const warningDir = path.join(homeDir, '.warping-ai');
    
    if (!fs.existsSync(warningDir)) {
      fs.mkdirSync(warningDir, { recursive: true });
    }

    this.sessionFile = path.join(warningDir, 'session-history.json');
    this.loadHistory();
  }

  private loadHistory(): void {
    if (fs.existsSync(this.sessionFile)) {
      const content = fs.readFileSync(this.sessionFile, 'utf-8');
      this.sessionHistory = JSON.parse(content);
    }
  }

  addEntry(command: string, result: string, agentType: string): void {
    const entry: SessionEntry = {
      timestamp: new Date(),
      command,
      result,
      agentType
    };
    this.sessionHistory.push(entry);
    this.saveHistory();
  }

  private saveHistory(): void {
    fs.writeFileSync(this.sessionFile, JSON.stringify(this.sessionHistory, null, 2));
  }

  getHistory(limit: number = 50): SessionEntry[] {
    return this.sessionHistory.slice(-limit);
  }

  clearHistory(): void {
    this.sessionHistory = [];
    this.saveHistory();
  }

  getSessionStats(): { totalCommands: number; commandsByAgent: Record<string, number> } {
    const stats = {
      totalCommands: this.sessionHistory.length,
      commandsByAgent: {} as Record<string, number>
    };

    this.sessionHistory.forEach(entry => {
      stats.commandsByAgent[entry.agentType] = (stats.commandsByAgent[entry.agentType] || 0) + 1;
    });

    return stats;
  }
}