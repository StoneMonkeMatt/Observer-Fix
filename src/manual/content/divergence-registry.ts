
/**
 * Known divergences between the canonical lexicon and the current engine implementation.
 */
export const DIVERGENCE_REGISTRY = [
  { 
    term: "Architecture Mode", 
    engineTerm: "mode", 
    status: "Drift", 
    action: "Pending rename to architectureMode" 
  },
  { 
    term: "High Duality Threshold", 
    engineTerm: "threshold", 
    status: "Drift", 
    action: "Pending rename to highDualityThreshold" 
  },
  { 
    term: "High Duality Persistence", 
    engineTerm: "highDualityPersistenceSteps", 
    status: "Undocumented", 
    action: "Add to canonical lexicon" 
  },
  { 
    term: "Simulation Depth", 
    engineTerm: "simSteps", 
    status: "Drift", 
    action: "Pending rename to maxSteps" 
  }
];
