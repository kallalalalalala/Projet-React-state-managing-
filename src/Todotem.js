import React from 'react';

import { Box, Checkbox, Text, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
const TodoItem = ({ task, handleChange, deleteTask }) => {
  return (
    <Box
      className="todo-item"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={4}
      borderWidth={1}
      borderRadius="md"
      boxShadow="sm"
      bg={task.completed ? 'green.100' : 'white'}
      transition="background-color 0.2s"
      _hover={{ bg: 'gray.100' }}
    >
      <Checkbox
        type="checkbox"
        isChecked={task.completed}
        onChange={handleChange}
        colorScheme="teal"
      />
      <Text
        ml={2}
        as={task.completed ? 's' : 'span'}
        color={task.completed ? 'gray.500' : 'black'}
      >
        {task.text}
      </Text>
      <IconButton
        aria-label="Delete task"
        icon={<DeleteIcon />}
        onClick={() => deleteTask(task.id)}
        colorScheme="red"
        variant="outline"
        size="sm"
      />
    </Box>
  );
};

export default TodoItem;
