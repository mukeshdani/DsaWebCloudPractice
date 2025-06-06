# Crew AI - Notes and Interview Q&A

---

## Overview of Crew AI

- Crew AI is a multi-agent platform for building autonomous AI teams ("Crews") and structured workflows ("Flows").
- Crews: Autonomous teams of agents for creative problem-solving and exploratory tasks.
- Flows: Structured, rule-based workflows for deterministic outcomes and auditability.
- Crew AI offers three main products:
  - Crew AI Enterprise: Commercial platform for deploying and monitoring agents.
  - Crew UI Studio: Low-code/no-code interface for building agent workflows.
  - Crew AI Framework (Open Source): Orchestration framework for developers.

---

## Core Concepts

### Agent
- Smallest autonomous unit backed by an LLM.
- Has a role, goal, backstory, optional memory, and tools.
- More structured than OpenAI Agents SDK.

### Task
- Specific assignment with description, expected output, and assigned agent.
- Multiple tasks can be assigned to one agent.

### Crew
- A team of agents and tasks.
- Execution modes:
  - Sequential: Tasks run in defined order.
  - Hierarchical: Manager LLM dynamically assigns tasks.

---

## Configuration & Code Structure

- Agents and tasks can be defined in YAML files for separation of concerns.
- Python integration uses decorators:
  - `@crew_base` for main crew class
  - `@agent` to define agents
  - `@task` to define tasks
  - `@crew` to assemble the crew

---

## Model Integration

- Powered by LiteLLM, a lightweight framework to interface with many LLMs.
- Supports multiple providers/models (OpenAI, Anthropic, Google Gemini, Mistral, etc.).
- Switching models is as simple as changing a string in config.

---

## Project Setup & Running

1. Create project: `crewai create crew my_crew`
2. Edit YAML configs (`agents.yaml`, `tasks.yaml`)
3. Define agents, tasks, and crew in `crew.py`
4. Set runtime inputs in `main.py`
5. Run project: `crewai run`

---

## Key Features

- Tools: Equip agents with external API capabilities.
- Context Passing: Pass data between tasks for multi-step workflows.
- Structured Outputs: Use Pydantic schemas for consistent, machine-readable results.
- Hierarchical Processing: Manager agent dynamically assigns tasks.
- Memory Integration: Short-term, long-term, and entity memory for contextual awareness.
- Code Execution: Agents can write and run code safely (e.g., in Docker).

---

## Interview Questions & Answers

**Q1: What is the difference between Crews and Flows in Crew AI?**  
A1: Crews are autonomous teams of agents designed for creative and exploratory problem-solving, with less predictable control. Flows are structured, rule-based workflows designed for deterministic outcomes and auditability.

**Q2: How are agents defined in Crew AI?**  
A2: Agents are defined with a role, goal, backstory, optional memory, and tools. They are the smallest autonomous units backed by LLMs and are typically configured in YAML files and registered in Python code using decorators.

**Q3: What are the execution modes available in Crew AI?**  
A3: Sequential mode runs tasks in a fixed order. Hierarchical mode uses a manager LLM to dynamically assign tasks to agents, allowing more flexible and autonomous workflows.

**Q4: How does Crew AI handle model integration?**  
A4: Crew AI uses LiteLLM, a lightweight framework that supports multiple LLM providers and models. Switching models is as simple as changing a string in the configuration.

**Q5: What is the purpose of context passing in Crew AI?**  
A5: Context passing allows output from one task to be passed as input to another, enabling multi-step reasoning workflows and maintaining continuity between tasks.

**Q6: How does Crew AI support code execution by agents?**  
A6: Agents can be configured to write and execute code safely, often using Docker containers for sandboxing. This enables agents to solve programming tasks by generating and running code.

**Q7: What are the benefits of using YAML configuration files in Crew AI?**  
A7: YAML files separate configuration from code, making it easier to manage prompts, roles, goals, and tasks. This separation improves maintainability and clarity.

**Q8: What is hierarchical processing and why is it useful?**  
A8: Hierarchical processing uses a manager agent to assign tasks dynamically, enabling more flexible and autonomous workflows compared to fixed sequential execution.

---

## Summary

Crew AI is a powerful framework for building multi-agent AI systems with structured configuration, flexible execution modes, and integration with multiple LLMs. It supports advanced features like memory, tools, code execution, and hierarchical task management, making it suitable for complex autonomous AI applications.

---

# End of Notes
