import { Request, Response } from "express";
import TodoModel from "@/models/todo";
import { User } from "@/types/User";

// Get all todos for the current user
export const getAllTodos = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = req.user as User;
    const todos = await TodoModel.find({ userId: user._id });
    res.status(200).json(todos);
  } catch (error) {
    console.error("Failed to fetch todos", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a specific todo by ID
export const getTodoById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = req.user as User;
    const todo = await TodoModel.findOne({
      _id: req.params.id,
      userId: user._id,
    });

    if (!todo) {
      res.status(404).json({ error: "Todo not found" });
      return;
    }

    res.status(200).json(todo);
  } catch (error) {
    console.error("Failed to fetch todo", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new todo
export const createTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = req.user as User;
    const { title, description } = req.body;

    if (!title) {
      res.status(400).json({ error: "Title is required" });
      return;
    }

    const todo = await TodoModel.create({
      title,
      description,
      userId: user._id,
      completed: false,
    });

    res.status(201).json(todo);
  } catch (error) {
    console.error("Failed to create todo", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a todo
export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = req.user as User;
    const { title, description, completed } = req.body;

    const todo = await TodoModel.findOne({
      _id: req.params.id,
      userId: user._id,
    });

    if (!todo) {
      res.status(404).json({ error: "Todo not found" });
      return;
    }

    const updatedTodo = await TodoModel.findByIdAndUpdate(
      req.params.id,
      { title, description, completed },
      { new: true }
    );

    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error("Failed to update todo", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a todo
export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = req.user as User;

    const todo = await TodoModel.findOne({
      _id: req.params.id,
      userId: user._id,
    });

    if (!todo) {
      res.status(404).json({ error: "Todo not found" });
      return;
    }

    await TodoModel.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Failed to delete todo", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
