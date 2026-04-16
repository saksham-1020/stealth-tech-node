export interface PlacementStatus {
  eligible: boolean;
  stage: "NONE" | "MOCK_INTERVIEW" | "APPLIED" | "SELECTED";
}
