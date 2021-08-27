import { screen } from "@testing-library/react";
import { calculateRewardForTransaction } from '../utils';

describe('test cases to test CalculateRewards file', () => {
    it('to test CalculateRewards to return rewards per prise', () => {
        expect(calculateRewardForTransaction(100)).toBe(50);
        expect(calculateRewardForTransaction(40)).toBe(0);
        expect(calculateRewardForTransaction(140)).toBe(130);
    })
});
