export interface Workplace {
  id: number;
  name: string;
  description: string;
  ip_address: string | null;
  workplace_type: string;
}

export interface NewWorkplace {
  name: string;
  description: string;
  ip_address?: string | undefined;
}

export interface PatchWorkplace {
  name?: string;
  description?: string;
  ip_address?: string | null | undefined;
}
