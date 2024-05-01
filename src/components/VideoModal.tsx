import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
import { VideoResponse } from 'src/types/Video';
import YouTube, { YouTubeProps } from 'react-youtube';

interface Props {
  videos: VideoResponse;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

function VideoModal({ videos, isOpen, onClose }: Props) {
  console.log('videos====>', videos)
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '420',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  let videoId = null
  let videoName = ''
  if (videos.results && videos.results.length > 0) {
    videoId = videos.results[0].key
    videoName = videos.results[0].name
  }
  return (
    <>
      <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{videoName || 'Video'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {videoId && <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


export default VideoModal