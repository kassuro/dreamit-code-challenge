import { useQuery } from '@vue/apollo-composable';
import { gql } from 'graphql-tag';
import type { ApiQuery, DrawResult, DrawType } from '@/services/api/types';

export const loadDraws = (
  type: DrawType,
  limit = 1,
): ApiQuery<{ draw: DrawResult }> => {
  const { result, loading, error } = useQuery(gql`
  query {
    draw(limit: ${limit} type: "${type}") {
      draws {
        additionalNumbers
        gameAmount
        jackpot
        numbers
        date
      }
    }
  }
`);

  return {
    result,
    loading,
    error,
  };
};
