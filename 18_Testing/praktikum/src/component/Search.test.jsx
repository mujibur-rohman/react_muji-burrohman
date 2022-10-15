import { render, screen, act, fireEvent} from '@testing-library/react';
import Search from './Search';
import axios from 'axios';

jest.mock('axios');

describe('Search', () => {
  test('Fetch from API and Display', async () => { 
    const stories = [
      {objectID: 1, title: "Hello"},
      {objectID: 2, title: "React"},
    ];
    
    axios.get.mockImplementationOnce(()=> Promise.resolve( {data: {hits: stories}} ));
    render(<Search/>);
    fireEvent.click(screen.getByRole("button"));
    const items = await screen.findAllByRole('listitem');
    expect(items).toHaveLength(2);
   })
  test('Fetch from API and Fails', async () => { 
    axios.get.mockImplementationOnce(()=> Promise.reject(new Error('Error Jaringan')));
    
    render(<Search/>);
    const items = screen.getByRole("button");

    expect(items).toBeInTheDocument();
   })

  test('Get All Button', () => { 
    render(<Search/>);
    const button = screen.getByRole('button', {name: /Cari Cerita/i});
    expect(button).toBeInTheDocument();
   })
});
