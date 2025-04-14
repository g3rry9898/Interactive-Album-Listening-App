"use client";
import {
    Avatar,
    Box,
    Button,
    Heading as ChakraHeading,
    Flex,
    FormControl,
    HStack,
    IconButton,
    Spinner,
    Text,
    Textarea,
    useToast,
    VStack
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaHeart, FaReply, FaTrash } from 'react-icons/fa';

interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  timestamp: string;
  likes: number;
  replies: Comment[];
}

interface CommentSectionProps {
  albumId: string;
}

export default function CommentSection({ albumId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const toast = useToast();

  // Load comments from localStorage on component mount
  useEffect(() => {
    const storedComments = localStorage.getItem(`comments_${albumId}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
    setIsLoading(false);
  }, [albumId]);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem(`comments_${albumId}`, JSON.stringify(comments));
    }
  }, [comments, albumId]);

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      userId: 'currentUser', // In a real app, this would come from auth
      userName: 'You', // In a real app, this would come from user profile
      userAvatar: 'https://bit.ly/dan-abramov', // Default avatar
      content: newComment,
      timestamp: new Date().toISOString(),
      likes: 0,
      replies: []
    };

    setComments([...comments, comment]);
    setNewComment('');
    toast({
      title: "Comment added",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleAddReply = (commentId: string) => {
    if (!replyContent.trim()) return;

    const reply: Comment = {
      id: Date.now().toString(),
      userId: 'currentUser',
      userName: 'You',
      userAvatar: 'https://bit.ly/dan-abramov',
      content: replyContent,
      timestamp: new Date().toISOString(),
      likes: 0,
      replies: []
    };

    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, reply]
        };
      }
      return comment;
    });

    setComments(updatedComments);
    setReplyContent('');
    setReplyingTo(null);
    toast({
      title: "Reply added",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleLikeComment = (commentId: string) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.likes + 1
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleDeleteComment = (commentId: string) => {
    const updatedComments = comments.filter(comment => comment.id !== commentId);
    setComments(updatedComments);
    toast({
      title: "Comment deleted",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <Flex justify="center" align="center" h="200px">
        <Spinner size="xl" color="purple.500" />
      </Flex>
    );
  }

  return (
    <Box mt={12}>
      <ChakraHeading size="xl" color="white" mb={6}>
        Comments
      </ChakraHeading>

      {/* Add Comment Form */}
      <Box mb={8}>
        <FormControl>
          <Textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts about this album..."
            bg="gray.800"
            color="white"
            borderColor="gray.700"
            _hover={{ borderColor: 'purple.400' }}
            _focus={{ borderColor: 'purple.400' }}
            rows={4}
          />
        </FormControl>
        <Button
          mt={4}
          colorScheme="purple"
          onClick={handleAddComment}
          isDisabled={!newComment.trim()}
        >
          Post Comment
        </Button>
      </Box>

      {/* Comments List */}
      <VStack spacing={6} align="stretch">
        {comments.map((comment) => (
          <Box key={comment.id} bg="gray.800" p={6} borderRadius="lg">
            {/* Main Comment */}
            <HStack spacing={4} align="start">
              <Avatar size="sm" src={comment.userAvatar} />
              <Box flex={1}>
                <HStack justify="space-between">
                  <Text color="white" fontWeight="bold">
                    {comment.userName}
                  </Text>
                  <Text color="gray.400" fontSize="sm">
                    {formatDate(comment.timestamp)}
                  </Text>
                </HStack>
                <Text color="gray.300" mt={2}>
                  {comment.content}
                </Text>
                <HStack mt={4} spacing={4}>
                  <IconButton
                    aria-label="Like comment"
                    icon={<FaHeart />}
                    size="sm"
                    variant="ghost"
                    color="gray.400"
                    _hover={{ color: 'pink.400' }}
                    onClick={() => handleLikeComment(comment.id)}
                  />
                  <Text color="gray.400" fontSize="sm">
                    {comment.likes} likes
                  </Text>
                  <Button
                    size="sm"
                    variant="ghost"
                    color="gray.400"
                    leftIcon={<FaReply />}
                    onClick={() => setReplyingTo(comment.id)}
                  >
                    Reply
                  </Button>
                  {comment.userId === 'currentUser' && (
                    <IconButton
                      aria-label="Delete comment"
                      icon={<FaTrash />}
                      size="sm"
                      variant="ghost"
                      color="gray.400"
                      _hover={{ color: 'red.400' }}
                      onClick={() => handleDeleteComment(comment.id)}
                    />
                  )}
                </HStack>
              </Box>
            </HStack>

            {/* Reply Form */}
            {replyingTo === comment.id && (
              <Box mt={4} pl={12}>
                <FormControl>
                  <Textarea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="Write a reply..."
                    bg="gray.700"
                    color="white"
                    borderColor="gray.600"
                    _hover={{ borderColor: 'purple.400' }}
                    _focus={{ borderColor: 'purple.400' }}
                    rows={2}
                  />
                </FormControl>
                <HStack mt={2} spacing={2}>
                  <Button
                    size="sm"
                    colorScheme="purple"
                    onClick={() => handleAddReply(comment.id)}
                    isDisabled={!replyContent.trim()}
                  >
                    Post Reply
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      setReplyingTo(null);
                      setReplyContent('');
                    }}
                  >
                    Cancel
                  </Button>
                </HStack>
              </Box>
            )}

            {/* Replies */}
            {comment.replies.length > 0 && (
              <VStack mt={4} spacing={4} align="stretch" pl={12}>
                {comment.replies.map((reply) => (
                  <Box key={reply.id} bg="gray.700" p={4} borderRadius="md">
                    <HStack spacing={4} align="start">
                      <Avatar size="sm" src={reply.userAvatar} />
                      <Box flex={1}>
                        <HStack justify="space-between">
                          <Text color="white" fontWeight="bold">
                            {reply.userName}
                          </Text>
                          <Text color="gray.400" fontSize="sm">
                            {formatDate(reply.timestamp)}
                          </Text>
                        </HStack>
                        <Text color="gray.300" mt={2}>
                          {reply.content}
                        </Text>
                        <HStack mt={2} spacing={4}>
                          <IconButton
                            aria-label="Like reply"
                            icon={<FaHeart />}
                            size="sm"
                            variant="ghost"
                            color="gray.400"
                            _hover={{ color: 'pink.400' }}
                            onClick={() => handleLikeComment(reply.id)}
                          />
                          <Text color="gray.400" fontSize="sm">
                            {reply.likes} likes
                          </Text>
                          {reply.userId === 'currentUser' && (
                            <IconButton
                              aria-label="Delete reply"
                              icon={<FaTrash />}
                              size="sm"
                              variant="ghost"
                              color="gray.400"
                              _hover={{ color: 'red.400' }}
                              onClick={() => handleDeleteComment(reply.id)}
                            />
                          )}
                        </HStack>
                      </Box>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  );
} 