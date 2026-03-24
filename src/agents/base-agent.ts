export interface AgentAction {
  type: 'think' | 'act' | 'observe';
  content: string;
  metadata?: Record<string, any>;
}

export interface AgentResponse {
  success: boolean;
  result: string;
  actions: AgentAction[];
  suggestedNextSteps?: string[];
}

export interface ProjectContext {
  projectRoot: string;
  codebaseStructure?: Record<string, any>;
  gitBranch?: string;
  recentCommits?: string[];
  projectMetadata?: Record<string, any>;
}

export abstract class BaseAgent {
  abstract name: string;
  abstract role: string;

  async execute(goal: string, context: ProjectContext): Promise<AgentResponse> {
    const plan = await this.think(goal, context);
    const actions = await this.act(plan, context);
    return await this.observe(actions);
  }

  protected abstract think(goal: string, context: ProjectContext): Promise<string>;
  protected abstract act(plan: string, context: ProjectContext): Promise<AgentAction[]>;
  protected abstract observe(actions: AgentAction[]): Promise<AgentResponse>;
}