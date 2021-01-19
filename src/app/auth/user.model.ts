export interface Role {
  name: string;
  authority: string;
}

export interface User {

  key?: string;
  name?: string;
  email?: string;
  role?: Role[];
  title?: string;
  img?: string;
  exp?: string;
  sup?: string;

}
