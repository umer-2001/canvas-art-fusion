import { toast } from "sonner";

export const successMsg = (msg: string) => {
  toast.success(msg);
};
export const errorMsg = (msg: string) => {
  toast.error(msg);
};
export const warningMsg = (msg: string) => {
  toast.warning(msg);
};
