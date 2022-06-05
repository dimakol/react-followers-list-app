import IFollowers from "./IFollowers";

interface IUser extends IFollowers {
  name: string;
  company: string | null;
  blog: string;
  location: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

export default IUser;
