# 🚀 Warping-AI: AI-Native Agentic Development Terminal

An intelligent terminal environment that combines traditional CLI functionality with AI-powered agents to boost developer productivity.

## ✨ Features

- **Multi-Agent System**: CodeAgent, DebugAgent, DevOpsAgent, and more
- **Natural Language Processing**: Intuitive command interface
- **Context Awareness**: Project and Git integration
- **Interactive REPL**: Conversational agent interface
- **Session Management**: Persistent history and preferences
- **Extensible Architecture**: Easy to add custom agents
- **Local & Cloud LLMs**: Support for OpenAI, local models, etc.

## 🎯 Quick Commands

```bash
npm install
cp .env.example .env
# Add OPENAI_API_KEY to .env

npm run dev plan "Create a React authentication component"
npm run dev debug "TypeError: Cannot read property"
npm run dev interactive
```

## 📦 Core Components

- **Agents**: BaseAgent, CodeAgent, DebugAgent, Orchestrator
- **LLM**: OpenAI adapter with extensible provider interface
- **Context**: Project awareness, Git integration, session management
- **CLI**: Interactive REPL with natural language parsing

## 🚧 Roadmap

- [ ] ResearchAgent for documentation
- [ ] DevOpsAgent for deployment
- [ ] Local LLM support (Ollama, LLaMA)
- [ ] Web UI dashboard
- [ ] Plugin system