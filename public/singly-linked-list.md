# Singly Linked List

![Singly Lisked List](https://github.com/metaphorlism/data-structures/blob/main/linked_lists/resource/sll.png?raw=true)
A singly linked list is a type of linked list where each node stores a piece of data and a reference or pointer to the next node in the sequence. The last node in the list contains a null reference, indicating the end of the list.

## How To Create It

### Node

Before we create the linked list we need to create the node of the linked list first like in singly linked list, we'll create a Node class with `data` and `next`

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
```

### Singly Linked List

Let's create our basic singly linked list without functionality

```python
class SinglyLinkedList:
    def __init__(self):
        self.head = None
```

### Insert methods

Let's implement insert method into it
I want to insert at the beginning and the end
This is how insert at the beginning look like  
![Diagram of insert node at the beginning](https://github.com/metaphorlism/data-structures/blob/main/linked_lists/resource/insert_node_at_the_beginning_sll.png?raw=true)
And this is how insert at the end look like  
![Diagram of insert node at the end](https://github.com/metaphorlism/data-structures/blob/main/linked_lists/resource/insert_node_at_the_end_sll.png?raw=true)

```python
def insert_at_beginning(self, data):
    # Create a new Node with data
    new_node = Node(data)

    # Checking if the linked list is empty
    if self.head is None:
        # If it is, we will put our new node into the head
        self.head = new_node
        return

    # If not, we will let next of the new node point to linked list
    new_node.next = self.head
    # And we will assign head of the linked list to our new node
    self.head = new_node

def insert_at_end(self, data):
    # Create a new Node with data
    new_node = Node(data)

    # Checking if the linked list is empty
    if self.head is None:
        # If it is, we will put our new node into the head
        self.head = new_node
        return

    # If not, we will store linked list into our variable
    # And looping to the end with it
    current_node = self.head
    # Checking til the end of the linked list
    while current_node.next is not None:
        current_node = current_node.next

    # We will assign next of the last node to our new node
    current_node.next = new_node
```

### Delete method

After insert method we will implement delete method
In this method it will delete the first value matchs with the condition
This is how can we achieve it
![Diagram of delete node](https://github.com/metaphorlism/data-structures/blob/main/linked_lists/resource/delete_node_from_sll.png?raw=true)

```python
def delete(self, data):
    # Checking if the linked list is empty
    if self.head is None:
        return

    # Checking if data delete match with the head of the linked list
    if self.head.data == data:
        # We will assign head of linked list to the next node
        self.head = self.head.next
        return

    # Storing previous node and current node
    # Previous node is the head node
    # Because we already checked the head node
    # So current node is the next node
    previous_node = self.head
    current_node = self.head.next

    # Looping til the end of the linked list
    while current_node is not None:
        # Checking if data is match with the current node
        if current_node.data == data:
            # If it is, we will point our previous node to next of the current node
            # Because we want to delete the current node
            previous_node.next = current_node.next
            return

        # Move to the next node
        # Assign previous node to current node
        # And current node to next of the current node
        previous_node = current_node
        current_node = current_node.next
```

### Print Method

```python
def __str__(self):
    # Checking if the linked list is empty
    if not self.head:
        return "List is empty"

    output = ""

    # Store current node before looping
    curr = self.head
    while curr:
        # Append current node's data to output variable with "->"
        output += str(curr.data) + "->"
        # Move to the next node
        curr = curr.next
    # Delete last "->" from output
    output = output[:-2]

    # Return output without leading and trailing whitespace
    return output.strip()
```

## Code

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def insert_at_beginning(self, data):
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
            return

        new_node.next = self.head
        self.head = new_node

    def insert_at_end(self, data):
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
            return

        current_node = self.head
        while current_node.next is not None:
            current_node = current_node.next

        current_node.next = new_node

    def delete(self, data):
        if self.head is None:
            return

        if self.head.data == data:
            self.head = self.head.next
            return

        previous_node = self.head
        current_node = self.head.next

        while current_node is not None:
            if current_node.data == data:
                previous_node.next = current_node.next
                return

            previous_node = current_node
            current_node = current_node.next

    def __str__(self):
        if not self.head:
            return "List is empty"

        output = ""

        curr = self.head
        while curr:
            output += str(curr.data) + "->"
            curr = curr.next
        output = output[:-2]

        return output.strip()
```

## Example

```python
def singly_linked_list_example():
    sll = SinglyLinkedList()

    # Insert Data
    sll.insert_at_beginning("Hello")
    sll.insert_at_beginning("World")

    sll.insert_at_end("World")

    # Print Linked List
    print(sll)  # World->Hello->World

    # Remove Data
    sll.delete("World")

    # Print Linked List
    print(sll)  # Hello->World
```

## GitHub

Code : [Singly Linked List](https://github.com/metaphorlism/data-structures/blob/main/linked_lists/SinglyLinkedList.py)
