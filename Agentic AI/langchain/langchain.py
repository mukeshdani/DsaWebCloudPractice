#!python --version

import langchain
langchain.__version__

from langchain.agents import initialize_agent, Tool
from langchain.llms import OpenAI

from dotenv import load_dotenv
import os

load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")


#!pip install -U duckduckgo-search

from langchain_community.tools.ddg_search.tool import DuckDuckGoSearchRun

# Web Search Tool using DuckDuckGo
search_tool = Tool(
    name="DuckDuckGo Search",
    func=DuckDuckGoSearchRun().run,
    description="Use this tool to perform web searches using DuckDuckGo."
)



llm = OpenAI(temperature=0.5)

tools = [search_tool]

agent = initialize_agent(tools, llm, agent="zero-shot-react-description", verbose=True)

response = agent.run("What are the top trending movies this week?")

print(response)


# The WikipediaAPIWrapper - allows you to query Wikipedia for articles and summaries.

#!pip install wikipedia

from langchain_community.utilities.wikipedia import WikipediaAPIWrapper

# Step 1: Initialize the Wikipedia Tool
wikipedia_tool = Tool(
    name="Wikipedia Search",
    func=WikipediaAPIWrapper().run,
    description="Use this tool to search Wikipedia for information on any topic."
)

llm = OpenAI(temperature=0.5)

tools = [wikipedia_tool]

agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent="zero-shot-react-description",
    verbose=True
)

query = "Who is Alan Turing, and what are his contributions?"
response = agent.run(query)
print("Response from Agent:")
print(response)


import sqlite3

# Connect to SQLite database (creates example.db if it doesn't exist)
connection = sqlite3.connect("example.db")
cursor = connection.cursor()

# Create the inventory table
cursor.execute("""
CREATE TABLE IF NOT EXISTS inventory (
    id INTEGER PRIMARY KEY,
    product_name TEXT NOT NULL,
    stock_quantity INTEGER NOT NULL
)
""")

# Insert sample data
cursor.executemany("""
INSERT INTO inventory (product_name, stock_quantity) VALUES (?, ?)
""", [
    ("Product A", 150),
    ("Product B", 200),
    ("Product C", 300),
    ("Product D", 100),
    ("Product E", 50)
])

# Commit and close connection
connection.commit()
connection.close()

print("Database created and populated with sample data.")


from langchain_community.utilities.sql_database import SQLDatabase
from langchain_community.agent_toolkits.sql.toolkit import SQLDatabaseToolkit

# Step 1: Connect to the Database
db = SQLDatabase.from_uri("sqlite:///example.db")

# Step 3: Initialize the LLM
llm = OpenAI(temperature=0.5)

# Step 2: Create the SQL Database Toolkit

toolkit = SQLDatabaseToolkit(db=db, llm=llm)

tools = toolkit.get_tools()

agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent="zero-shot-react-description",
    verbose=True
)


query1 = "How many units of Product A are in stock?"
response1 = agent.run(query1)
print("Response:", response1)


# ArxivQueryRun
from langchain.agents import initialize_agent, Tool
from langchain.llms import OpenAI

from dotenv import load_dotenv
import os

load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")


from langchain_community.tools.arxiv.tool import ArxivQueryRun

arxiv_tool = Tool(
    name="Arxiv Search",
    func=ArxivQueryRun().run,
    description="Use this tool to search academic papers on arXiv. Provide topics, authors, or keywords."
)

# Step 2: Initialize the LLM
llm = OpenAI(temperature=0.5)

# Step 3: Combine the tool into a list
tools = [arxiv_tool]

# Step 4: Initialize the Agent
agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent="zero-shot-react-description",
    verbose=True
)

# Step 5: Query the Agent
query = "Search for research papers on Diffusion Models in 2024."
response = agent.run(query)
print("Response from Agent:")
print(response)



from langchain_community.tools.file_management import ReadFileTool
from langchain.agents import initialize_agent, Tool
from langchain.llms import OpenAI

from dotenv import load_dotenv
import os

load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")

# Step 1: Initialize the ReadFileTool
read_file_tool = Tool(
    name="Read File",
    func=ReadFileTool().run,
    description="Use this tool to read the content of a text file in the current working directory. Provide the file name as input."
)

# Step 2: Initialize the LLM
llm = OpenAI(temperature=0.5)

# Step 3: Combine the tool into a list
tools = [read_file_tool]

# Step 4: Initialize the Agent
agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent="zero-shot-react-description",
    verbose=True
)

# Step 5: Query the Agent with a file name
file_name = "example.txt"

response = agent.run(f"Read the content of the file named {file_name}.")
print("Response from Agent:")
print(response)