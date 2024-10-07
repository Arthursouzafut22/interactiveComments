import { useState, useCallback, useEffect } from "react";

export interface user {
  id: number;
  username: string;
}

export interface comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  img: string;
  username: string;
  currentUser: boolean;
  activeEdit: boolean;
  comentario: string;
  replies: Reply[];
}

export type Reply = {
  user: string;
  coment: string;
};

export interface ApiResponse {
  currenceUser: user;
  comments: comment[];
}

const RequestApi = () => {
  const [resquest, setResquest] = useState<ApiResponse | null>(null);

  const fetchComents = useCallback(async () => {
    const res = await fetch("data.json");
    const response: ApiResponse = await res.json();
    setResquest(response);
  }, []);

  useEffect(() => {
    fetchComents();
  }, [fetchComents]);

  return {
    resquest,
    setResquest,
    fetchComents,
  };
};

export default RequestApi;
