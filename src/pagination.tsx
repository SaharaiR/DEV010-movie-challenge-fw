import MenuNav from '../components/NavBar';

const totalPages = 10;

interface PaginationProps {
    currentPage: number;
    onPageChange: (nextPage: number) => void;
  }
  
  export default function Pagination({
    currentPage,
    onPageChange
  }: PaginationProps) {
  
    function handleFirstPage() {
      onPageChange(1);
    }
  
    function handleLastPage() {
      onPageChange(totalPages); 
    }
  
    function handlePrevPage() {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    }
  
    function handleNextPage() {
      if (currentPage < totalPages){
        onPageChange(currentPage + 1);
      }
    }
  
    return (
        <MenuNav
          onFirstPage={handleFirstPage}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
          onLastPage={handleLastPage}  
        />
    );
  }