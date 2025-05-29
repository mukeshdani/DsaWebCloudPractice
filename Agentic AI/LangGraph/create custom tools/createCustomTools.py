
# Step 1: Install required packages
#!pip install --upgrade langchain langchain-community langgraph openai langchain_openai
#!pip install -U duckduckgo-search

# Step 2: Import necessary modules
from IPython.display import Image, display
from langgraph.graph import StateGraph, START
from langchain_openai import ChatOpenAI
from langchain_core.messages import SystemMessage, HumanMessage
from langgraph.graph.message import add_messages
from langgraph.graph import MessagesState
from langgraph.prebuilt import ToolNode, tools_condition
from typing import Annotated
from typing_extensions import TypedDict

# Step 3: Define the state structure
class State(TypedDict):
    messages: Annotated[list, add_messages]

# Step 4: Create a DuckDuckGo search tool
from langchain_community.tools import DuckDuckGoSearchRun

def search_duckduckgo(query: str):
    """Searches DuckDuckGo using LangChain's DuckDuckGoSearchRun tool."""
    search = DuckDuckGoSearchRun()
    return search.invoke(query)

# Step 5: Define custom math tools
def multiply(a: int, b: int) -> int:
    """Multiply a and b"""
    return a * b

def add(a: int, b: int) -> int:
    """Add a and b"""
    return a + b

# Step 6: Initialize the OpenAI LLM
llm = ChatOpenAI(
    temperature=0,
    api_key='sk-proj-************************QHrtvM7',  # Replace with your actual key
    model="gpt-4o-mini"
)

# Step 7: Bind tools to the LLM
tools = [search_duckduckgo, add, multiply]
llm_with_tools = llm.bind_tools(tools)

# Step 8: Define the assistant node
def chatbot(state: State):
    return {"messages": [llm_with_tools.invoke(state["messages"])]}

# Step 9: Build the LangGraph
graph_builder = StateGraph(State)

# Add nodes
graph_builder.add_node("assistant", chatbot)
graph_builder.add_node("tools", ToolNode(tools))

# Define edges
graph_builder.add_edge(START, "assistant")
graph_builder.add_conditional_edges("assistant", tools_condition)
graph_builder.add_edge("tools", "assistant")

# Compile the graph
react_graph = graph_builder.compile()

# Step 10: Visualize the graph
display(Image(react_graph.get_graph().draw_mermaid_png()))


# Step 11: Run the chatbot with a complex query
response = react_graph.invoke({
    "messages": [HumanMessage(content="what is the weather in delhi. Multiply it by 2 and add 5.")]
})

# Print the response
print(response["messages"])