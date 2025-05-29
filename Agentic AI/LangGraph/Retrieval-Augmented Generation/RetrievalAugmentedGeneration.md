## 🧠 Why RAG?

### ❌ Problems with Traditional LLMs:
- **Stale Knowledge**: Trained on static data → can't access latest news or updates.
- **No Personalization**: Can't answer questions about private or user-specific data.
- **Hallucinations**: May generate incorrect or made-up facts.
- **Retraining is Costly**: Updating models is expensive and slow.

### ✅ RAG = Retrieval-Augmented Generation
**Solution**: Combine LLMs with external knowledge sources (like documents, databases, or web search).

### 🔁 RAG Workflow:
```
User Query → [Retriever] → Relevant Docs → [LLM] → Final Answer
```

---

## 🧱 Step-by-Step Code Explanation

### ✅ 1. Install Required Libraries

```python
!pip install langchain langchain-core langchain_community langgraph langchain-huggingface transformers torch
```

- `langchain`: Core framework for LLM apps.
- `langgraph`: Graph-based orchestration of agents/functions.
- `transformers`: HuggingFace models.
- `torch`: Backend for model execution.

---

### ✅ 2. Load Documents from a URL

```python
from langchain_community.document_loaders import UnstructuredURLLoader

urls = ['https://langchain-ai.github.io/langgraph/tutorials/introduction/']
loader = UnstructuredURLLoader(urls=urls)
docs = loader.load()
```

- Loads web content as documents.
- You can also use loaders for PDFs, Notion, Google Docs, etc.

---

### ✅ 3. Split Documents into Chunks

```python
from langchain_text_splitters import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
all_splits = text_splitter.split_documents(docs)
```

- Splits large documents into manageable chunks.
- `chunk_overlap` ensures context continuity.

---

### ✅ 4. Create Embeddings

```python
from langchain_community.embeddings import HuggingFaceEmbeddings

embeddings = HuggingFaceEmbeddings()
```

- Converts text into vectors for similarity search.
- Uses `sentence-transformers` under the hood.

---

### ✅ 5. Store Embeddings in a Vector Database

```python
from langchain_chroma import Chroma

vectorstore = Chroma.from_documents(documents=all_splits, embedding=HuggingFaceEmbeddings())
```

- Stores vectorized documents for fast retrieval.
- You can persist this to disk using `persist_directory`.

---

### ✅ 6. Load a HuggingFace LLM

```python
from transformers import pipeline
from langchain_huggingface import HuggingFacePipeline

model_id = "tiiuae/falcon-7b"

text_generation_pipeline = pipeline(
    "text-generation",
    model=model_id,
    model_kwargs={"torch_dtype": torch.bfloat16},
    max_new_tokens=200,
    device=0,
    temperature=0.7,
    top_k=50,
)

llm = HuggingFacePipeline(pipeline=text_generation_pipeline)
```

- Loads a local or HuggingFace-hosted model.
- `temperature`, `top_k` control randomness and diversity.

---

### ✅ 7. Use a RAG Prompt Template

```python
from langchain import hub

prompt = hub.pull("rlm/rag-prompt")
```

- Pulls a pre-defined prompt template for RAG.
- You can also define your own using `PromptTemplate`.

---

### ✅ 8. Define Application State

```python
from typing_extensions import List, TypedDict
from langchain_core.documents import Document

class State(TypedDict):
    question: str
    context: List[Document]
    answer: str
```

- Defines the structure of data passed between steps.

---

### ✅ 9. Define RAG Steps

#### 🔍 Retrieval Step

```python
def retrieve(state: State):
    retrieved_docs = vectorstore.similarity_search(state["question"], k=1)
    return {"context": retrieved_docs}
```

- Finds top-k relevant documents using vector similarity.

#### 🧠 Generation Step

```python
def generate(state: State):
    docs_content = "\n\n".join(doc.page_content for doc in state["context"])
    messages = prompt.invoke({"question": state["question"], "context": docs_content})
    response = llm.invoke(messages)
    return {"answer": response}
```

- Combines retrieved context with the question.
- Passes it to the LLM for final answer generation.

---

### ✅ 10. Build and Run LangGraph

```python
from langgraph.graph import START, StateGraph

graph_builder = StateGraph(State).add_sequence([retrieve, generate])
graph_builder.add_edge(START, "retrieve")
graph = graph_builder.compile()
```

- Defines a graph with two steps: `retrieve → generate`.
- `START` is the entry point.

---

### ✅ 11. Visualize the Graph (Optional)

```python
from IPython.display import Image, display

display(Image(graph.get_graph().draw_mermaid_png()))
```

- Visualizes the flow of the LangGraph.

---

### ✅ 12. Run the RAG App

```python
response = graph.invoke({"question": "what is langgraph?"})
print(response["answer"])
```

- Executes the full RAG pipeline.
- Retrieves relevant info and generates an answer.

---

## 🧠 Key Interview Concepts

| Concept | Explanation |
|--------|-------------|
| **RAG** | Combines retrieval with generation to enhance LLMs. |
| **Vector Store** | Stores embeddings for fast similarity search. |
| **Embeddings** | Converts text into numerical vectors. |
| **LangGraph** | Graph-based orchestration of steps or agents. |
| **Prompt Engineering** | Designing prompts to guide LLM behavior. |
| **LLM Pipeline** | A sequence of steps: input → retrieval → generation → output. |
| **Hallucination Reduction** | RAG grounds LLMs in real data, reducing made-up answers. |

---