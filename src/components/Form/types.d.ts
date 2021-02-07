import { DefaultState } from 'containers/WizardContainer/hooks';

export type InputEventFunction = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
export type UpdateInput = (inputValue: { [key: string]: DefaultState }) => void;

export interface IInputProps {
  id: string;
  label: string;
  updateValueOnBlur: UpdateInput;
  description?: string;
  formHasBeenSubmited?: boolean;
  isValidInput?: boolean;
  disabled?: boolean;
  value?: string;
  lenghtRange?: Array<number>;
}
