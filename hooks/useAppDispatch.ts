import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/store";

//pre-typed useDispatch hook, saves inporting types on every use
export const useAppDispatch = () => useDispatch<AppDispatch>();
