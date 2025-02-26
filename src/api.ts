import axios from "axios";
import { NewWorkplace, PatchWorkplace } from "./types";

const API_URL = "http://127.0.0.1:8000/api/";

const api = axios.create({
  baseURL: API_URL,
});

export const getWorkplaces = async () => {
  try {
    const response = await api.get("workplaces/");
    return response.data;
  } catch (error) {
    console.error("Error fetching workplaces:", error);
    throw error;
  }
};

export const deleteWorkplace = async (workplaceId: number) => {
  try {
    const response = await api.delete(`workplaces/${workplaceId}/`);
    return response.data;
  } catch (error) {
    console.error("Error deleting workplace:", error);
    throw error;
  }
};

export const updateWorkplace = async (
  workplaceId: number,
  data: PatchWorkplace
) => {
  try {
    console.log(data);
    const response = await api.patch(`workplaces/${workplaceId}/`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating workplace:", error);
    throw error;
  }
};

export const createWorkplace = async (workplace: NewWorkplace) => {
  try {
    const response = await api.post("workplaces/", workplace);
    return response.data;
  } catch (error) {
    console.error("Error creating workplace:", error);
    throw error;
  }
};

export const getWorkplace = async (workplaceId: number) => {
  try {
    const response = await api.get(`workplaces/${workplaceId}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching workplace:", error);
    throw error;
  }
};
