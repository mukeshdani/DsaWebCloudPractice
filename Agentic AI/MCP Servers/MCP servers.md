MCP servers:
Model context protocol


LLM Large Language Model (ChatGpt, gemini): only answer text
can do:
write an essay
write a query

can not do:
Email this essay
run the query

Tool1. Search Internet: 
Tool2. Edit code file
Tool3. ......

in above we dont follow any standard

In MCP we follow Standard:

Standard ---> Protocol

Cursor/windsurf --<>-- MCP Server Toold -> write to file, read form docs, read error from console
Tools: Mongodb

Model context protocol:
Model Context Protocol (MCP) is an open standard developed by Anthropic, the company behind Claude.

While it may sound technical, but the core idea is simple: give AI agents a consistent way to connect with tools, services, and data — no matter where they live or how they're built.

Model context protocol
1. Model
AI Model:
Model: 
LLM models like
GPT, Gemini, Claude etc

2. Context
Most Important for any LLM
context-> check if the error that i am gettig in this repo is mentioned in any issue or being discussed in slack.
Context1: MCP server to get repo issues
need access to repo issues
Context2: MCP server to get slack channel access
need access to slack channels

Type of context:
Tools: function
Resources: mostly attachements (csv file)
Smapling: way to query other model
prompts: templates for clients


Tools Resources - MCP Servers <-------MCP Client - AI Model


Protocols: Rules
set of rules: standard
Reflection request.


client -> MCP Server (Statefull) -> server send Event -<>- mongodb 
                                 -> message endpoint  -<>- premier pro 

