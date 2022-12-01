export interface Stake {
  stakebet: boolean;
  description: string;
  status: boolean;
}
export type StakeContextType = {
  stakes: Stake[];
  handleStake: () => void;
};
