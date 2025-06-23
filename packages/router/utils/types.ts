export interface VAdmireRouteMeta {
  text?: string; // menu name
  icon?: string; // icon name
  isShow?: boolean; // show in menu
  permissions?: string[]; // menu permissions
  link?: 'SYS_LINK' | 'INTERNAL_LINK' | 'EXTERNAL_LINK'; // link type
  url?: string; // link url
  cache?: boolean; // cache menu
  single?: boolean; // single route
  sort?: number; // menu sort
}

export interface VAdmireRoute {
  path: string;
  name: string;
  component?: string;
  redirect?: string;
  meta?: VAdmireRouteMeta;
  children?: VAdmireRoute[];
}
