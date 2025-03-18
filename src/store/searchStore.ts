import { create } from 'zustand';
import { ArtworkResponse, searchArtworks } from '../services/api';

interface SearchState {
  searchTerm: string;
  currentPage: number;
  results: ArtworkResponse['artObjects'];
  isLoading: boolean;
  error: Error | null;
  totalCount: number;
  hasSearched: boolean;
  setSearchTerm: (term: string) => void;
  search: (term?: string) => Promise<void>;
  loadMore: () => Promise<void>;
  reset: () => void;
}

export const useSearchStore = create<SearchState>((set, get) => ({
  searchTerm: '',
  currentPage: 1,
  results: [],
  isLoading: false,
  error: null,
  totalCount: 0,
  hasSearched: false,

  setSearchTerm: (term) => set({ searchTerm: term }),

  search: async (term?: string) => {
    const searchTerm = term ?? get().searchTerm;
    if (!searchTerm) return;

    set({ isLoading: true, error: null });
    try {
      const response = await searchArtworks(searchTerm, 1);
      set({
        results: response.artObjects,
        totalCount: response.count,
        currentPage: 1,
        error: null,
        hasSearched: true,
      });
    } catch (error) {
      set({ error: error as Error });
    } finally {
      set({ isLoading: false });
    }
  },

  loadMore: async () => {
    const { searchTerm, currentPage, results } = get();
    if (!searchTerm) return;

    set({ isLoading: true, error: null });
    try {
      const nextPage = currentPage + 1;
      const response = await searchArtworks(searchTerm, nextPage);
      set({
        results: [...results, ...response.artObjects],
        currentPage: nextPage,
        error: null,
      });
    } catch (error) {
      set({ error: error as Error });
    } finally {
      set({ isLoading: false });
    }
  },

  reset: () => set({
    searchTerm: '',
    currentPage: 1,
    results: [],
    isLoading: false,
    error: null,
    totalCount: 0,
    hasSearched: false,
  }),
}));