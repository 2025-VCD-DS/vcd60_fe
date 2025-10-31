/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Noto Sans KR', sans-serif;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  input {
    flex: 1;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #45a049;
    }
  }
`;

export const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;

  input,
  textarea {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }

  button {
    align-self: flex-start;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #2196f3;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #1976d2;
    }
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const GuestbookItem = styled.div`
  padding: 1rem;
  border-radius: 6px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;

  p {
    margin: 0.25rem 0;
    line-height: 1.4;
  }

  strong {
    color: #333;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;

  button {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: #f0f0f0;
    }
  }

  span {
    font-size: 1rem;
  }
`;
