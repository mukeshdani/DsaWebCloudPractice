# Python Asyncio Explained: Simple and Clear Guide

## Introduction

Python's `asyncio` module provides a way to write concurrent code using the `async`/`await` syntax. It allows you to run many tasks seemingly at the same time without using traditional threading or multiprocessing. This is especially useful for I/O-bound and high-level structured network code.

---

## What is Async/Await and Coroutines?

- **Async functions** are defined using `async def`.
- These functions are called **coroutines**.
- Coroutines are special functions that can pause and resume their execution.
- Calling an async function does **not** run it immediately; it returns a coroutine object.
- To run a coroutine, you must **await** it, which schedules it in the event loop.

Example:

```python
async def do_some_processing() -> str:
    # Simulate some work
    return "done"

# Calling the coroutine returns a coroutine object
my_coroutine = do_some_processing()

# Awaiting the coroutine runs it and gets the result
result = await my_coroutine
print(result)  # Output: done
```

---

## Why Use Asyncio?

- Asyncio is great for managing many tasks that spend time waiting (e.g., network requests, file I/O).
- It uses a single thread and an event loop to switch between tasks efficiently.
- Compared to threads and processes:
  - **Asyncio**: Best for many waiting tasks.
  - **Threads**: Best for parallel tasks sharing data with minimal CPU use.
  - **Processes**: Best for CPU-intensive tasks.

---

## The Event Loop

- The event loop is the core of asyncio.
- It runs asynchronous tasks and callbacks, handles events, and manages coroutines.
- You can think of it as a manager that decides which coroutine runs and when.

Example:

```python
import asyncio

async def main():
    print("Start of main coroutine")
    await asyncio.sleep(1)
    print("End of main coroutine")

asyncio.run(main())
```

---

## Running Coroutines

- You can run coroutines sequentially by awaiting them one by one.
- Or run them concurrently using tasks or gather.

Example of sequential:

```python
async def fetch_data(delay):
    print("Fetching data...")
    await asyncio.sleep(delay)
    print("Data fetched")
    return {"data": "Some Data"}

async def main():
    result1 = await fetch_data(2)
    result2 = await fetch_data(1)
    print(result1, result2)

asyncio.run(main())
```

---

## Creating and Awaiting Tasks

- Tasks wrap coroutines and schedule them concurrently.
- Use `asyncio.create_task()` to create a task.

Example:

```python
async def fetch_data(id, delay):
    print(f"Coroutine {id} starting")
    await asyncio.sleep(delay)
    print(f"Coroutine {id} done")
    return {"id": id, "data": f"Sample data {id}"}

async def main():
    task1 = asyncio.create_task(fetch_data(1, 2))
    task2 = asyncio.create_task(fetch_data(2, 3))
    task3 = asyncio.create_task(fetch_data(3, 1))

    result1 = await task1
    result2 = await task2
    result3 = await task3

    print(result1, result2, result3)

asyncio.run(main())
```

---

## asyncio.gather

- `asyncio.gather()` runs multiple coroutines concurrently and collects their results.
- It returns results in the order of the coroutines passed.
- Does not cancel other coroutines if one fails.

Example:

```python
async def main():
    results = await asyncio.gather(
        fetch_data(1, 2),
        fetch_data(2, 1),
        fetch_data(3, 3)
    )
    for result in results:
        print(f"Received result: {result}")

asyncio.run(main())
```

---

## asyncio.TaskGroup (Python 3.11+)

- Preferred way to manage multiple tasks.
- Provides built-in error handling.
- Cancels all tasks if any task fails.

Example:

```python
async def main():
    tasks = []
    async with asyncio.TaskGroup() as tg:
        for i, delay in enumerate([2, 1, 3], start=1):
            task = tg.create_task(fetch_data(i, delay))
            tasks.append(task)

    results = [task.result() for task in tasks]
    for result in results:
        print(f"Received result: {result}")

asyncio.run(main())
```

---

## Futures

- A Future is a low-level awaitable object representing a result that will be available in the future.
- Usually, you don't create futures manually, but sometimes it's useful.

Example:

```python
async def set_future_result(future, value):
    await asyncio.sleep(1)
    future.set_result(value)

async def main():
    loop = asyncio.get_running_loop()
    future = loop.create_future()

    asyncio.create_task(set_future_result(future, "Future result is ready"))

    result = await future
    print(f"Received future result: {result}")

asyncio.run(main())
```

---

## Synchronization Primitives

### Lock

- Prevents multiple coroutines from accessing a shared resource simultaneously.

Example:

```python
import asyncio

shared_resource = 0
lock = asyncio.Lock()

async def modify_resource():
    global shared_resource
    async with lock:
        print(f"Resource before: {shared_resource}")
        shared_resource += 1
        await asyncio.sleep(1)
        print(f"Resource after: {shared_resource}")

async def main():
    await asyncio.gather(modify_resource(), modify_resource())

asyncio.run(main())
```

### Semaphore

- Allows a limited number of coroutines to access a resource concurrently.

Example:

```python
async def access_resource(semaphore, resource_id):
    async with semaphore:
        print(f"Accessing resource {resource_id}")
        await asyncio.sleep(1)
        print(f"Releasing resource {resource_id}")

async def main():
    semaphore = asyncio.Semaphore(2)  # Allow 2 concurrent accesses
    await asyncio.gather(*(access_resource(semaphore, i) for i in range(5)))

asyncio.run(main())
```

### Event

- Used for signaling between coroutines.

Example:

```python
async def waiter(event):
    print("Waiting for event to be set")
    await event.wait()
    print("Event set, continuing")

async def setter(event):
    await asyncio.sleep(2)
    event.set()
    print("Event has been set")

async def main():
    event = asyncio.Event()
    await asyncio.gather(waiter(event), setter(event))

asyncio.run(main())
```

---

## Summary: When to Use Asyncio

- Use asyncio for managing many I/O-bound tasks that spend time waiting.
- Use threads for parallel tasks that share data and have minimal CPU use.
- Use processes for CPU-intensive tasks to maximize performance.

---

## Final Notes

- Asyncio is a powerful tool for writing concurrent Python code.
- It uses cooperative multitasking, so coroutines must use `await` to yield control.
- Proper error handling and synchronization are important when working with multiple coroutines.
- Python 3.11 introduced `asyncio.TaskGroup` for better task management.

---

This guide covers the essentials of asyncio with simple explanations and examples to help you get started with asynchronous programming in Python.

Happy coding! 🚀
