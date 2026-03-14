import { UserInterface } from "@/presentation/interfaces/user.interface";
import { apiService } from "../../../core/api/api";
export const checkStatusService = async (): Promise<UserInterface | null> => {
  console.log("SE LLAMO CHECK STATUS");
  try {
    const { data } = await apiService.get<UserInterface>("/auth/check-status");

    return data;
  } catch (error) {
    return null;
  }
};
