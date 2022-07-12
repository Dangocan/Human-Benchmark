import {
  AspectRatio,
  Button,
  Center,
  Flex,
  IconButton,
  Text,
  useConst,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
  TbDroplet,
  TbFlame,
  TbLeaf,
  TbPlayerPlay,
  TbRefresh,
  TbSun,
} from 'react-icons/tb';

type TColors = '' | 'red' | 'green' | 'yellow' | 'blue';

function PageMemoryGame() {
  const GAME_COLORS = ['red', 'green', 'blue', 'yellow'];
  const TIME_DELAY = 1800;

  const initialColor = useConst<Omit<TColors, ''>[]>([
    GAME_COLORS[Math.floor(Math.random() * 4)],
    GAME_COLORS[Math.floor(Math.random() * 4)],
    GAME_COLORS[Math.floor(Math.random() * 4)],
  ]);

  const [sucessCounter, setSucessCounter] = useState<number>(0);
  const [totalClicksCounter, setTotalClicksCounter] = useState<number>(0);
  const [activeColorButton, setActiveColorButton] = useState<TColors>('');
  const [colorSequence, setColorSequence] = useState<Omit<TColors, ''>[]>(initialColor);
  const [onGoingSequence, setOnGoingSequence] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [completedSequence, setCompletedSequence] = useState<boolean>(true);
  const [isPlayButtonDisabled, setIsPlayButtonDisabled] = useState<boolean>(false);
  const [playButtonText, setPlayButtonText] = useState<string>('Play');

  const buttonIsDisabledValidation = {
    playButton: (isPlayButtonDisabled || !completedSequence) && !gameOver,
    colorButton:
      !((isPlayButtonDisabled || !completedSequence) && !gameOver) || onGoingSequence,
  };

  const handleStart = async () => {
    setIsPlayButtonDisabled(true);
    if (!onGoingSequence) {
      if (gameOver) {
        setColorSequence(initialColor);
        setSucessCounter(0);
        setTotalClicksCounter(0);
      }
      if (completedSequence) {
        setSucessCounter(0);
      }
      setOnGoingSequence(true);
      setGameOver(false);
      setCompletedSequence(false);

      for (let i = 0; i < colorSequence.length; i++) {
        await new Promise((resolve) => {
          setTimeout(() => {
            blinkButton(GAME_COLORS.indexOf(colorSequence[i] as string));
            resolve(1);
          }, TIME_DELAY);
        });
      }

      await new Promise((resolve) => {
        setTimeout(() => {
          setOnGoingSequence(false);
          setTotalClicksCounter(0);
          setIsPlayButtonDisabled(false);

          resolve(1);
        }, TIME_DELAY);
      });
    }
  };

  const handleColorButtonClick = (index: number) => {
    if (!onGoingSequence && !gameOver && !completedSequence) {
      if (
        colorSequence[sucessCounter] === GAME_COLORS[index] &&
        totalClicksCounter <= colorSequence.length
      ) {
        handleSucess();
      } else {
        handleError();
      }
    }
  };

  const handleSucess = () => {
    setSucessCounter(sucessCounter + 1);
    if (totalClicksCounter === colorSequence.length - 1) {
      setPlayButtonText('Next');
      setCompletedSequence(true);
      setIsPlayButtonDisabled(false);
    }
  };

  const handleError = () => {
    setIsPlayButtonDisabled(false);
    setGameOver(true);
    setPlayButtonText('Restart');
    console.log({ sequencia: colorSequence });
  };

  const turnUpButton = async (index: number) => {
    await new Promise((resolve) =>
      setTimeout(() => {
        setActiveColorButton(GAME_COLORS[index] as TColors);
        resolve(1);
      }, TIME_DELAY),
    );
  };

  const cleanActiveButton = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        setActiveColorButton('');
        resolve(1);
      }, 1000),
    );
  };

  const blinkButton = async (index: number) => {
    await turnUpButton(index);
    await cleanActiveButton();
  };

  useEffect(() => {
    if (colorSequence.length === totalClicksCounter) {
      let nextColor = GAME_COLORS[Math.floor(Math.random() * 4)];
      setColorSequence([...colorSequence, nextColor]);
    }
  }, [totalClicksCounter]);

  return (
    <Center flexDirection="column" justifyContent="space-around" h="100%" w="100%">
      <Text fontSize="2xl" color="green">
        {`${sucessCounter}/${
          completedSequence && totalClicksCounter
            ? colorSequence.length - 1
            : colorSequence.length
        }`}
      </Text>
      <AspectRatio ratio={1} w="40%" maxW="600px" minW="100px">
        <Flex wrap="wrap" justifyContent="space-around">
          <IconButton
            disabled={buttonIsDisabledValidation.colorButton}
            onClick={() => {
              setTotalClicksCounter(totalClicksCounter + 1);
              handleColorButtonClick(0);
            }}
            w="45%"
            h="45%"
            m="2%"
            variant="outline"
            _hover={
              !buttonIsDisabledValidation.colorButton
                ? {
                    backgroundColor: 'red',
                    color: 'backgroundSecondary',
                  }
                : {}
            }
            _active={{ backgroundColor: 'red', color: 'backgroundSecondary' }}
            color="red"
            borderWidth="2px"
            borderColor="red"
            aria-label="Send email"
            icon={<TbFlame size="45%" />}
            isActive={activeColorButton === 'red'}
          />
          <IconButton
            disabled={buttonIsDisabledValidation.colorButton}
            onClick={() => {
              setTotalClicksCounter(totalClicksCounter + 1);
              handleColorButtonClick(1);
            }}
            w="45%"
            h="45%"
            m="2%"
            variant="outline"
            _hover={
              !buttonIsDisabledValidation.colorButton
                ? {
                    backgroundColor: 'green',
                    color: 'backgroundSecondary',
                  }
                : {}
            }
            _active={{ backgroundColor: 'green', color: 'backgroundSecondary' }}
            color="green"
            borderWidth="2px"
            borderColor="green"
            aria-label="Send email"
            icon={<TbLeaf size="45%" />}
            isActive={activeColorButton === 'green'}
          />
          <IconButton
            disabled={buttonIsDisabledValidation.colorButton}
            onClick={() => {
              setTotalClicksCounter(totalClicksCounter + 1);
              handleColorButtonClick(2);
            }}
            w="45%"
            h="45%"
            m="2%"
            variant="outline"
            _hover={
              !buttonIsDisabledValidation.colorButton
                ? {
                    backgroundColor: 'blue',
                    color: 'backgroundSecondary',
                  }
                : {}
            }
            _active={{ backgroundColor: 'blue', color: 'backgroundSecondary' }}
            color="blue"
            borderWidth="2px"
            borderColor="blue"
            aria-label="Send email"
            icon={<TbDroplet size="45%" />}
            isActive={activeColorButton === 'blue'}
          />
          <IconButton
            disabled={buttonIsDisabledValidation.colorButton}
            onClick={() => {
              setTotalClicksCounter(totalClicksCounter + 1);
              handleColorButtonClick(3);
            }}
            w="45%"
            h="45%"
            m="2%"
            variant="outline"
            _hover={
              !buttonIsDisabledValidation.colorButton
                ? {
                    backgroundColor: 'yellow',
                    color: 'backgroundSecondary',
                  }
                : {}
            }
            _active={{ backgroundColor: 'yellow', color: 'backgroundSecondary' }}
            color="yellow"
            borderWidth="2px"
            borderColor="yellow"
            aria-label="Send email"
            icon={<TbSun size="45%" />}
            isActive={activeColorButton === 'yellow'}
          />
        </Flex>
      </AspectRatio>
      <AspectRatio ratio={16 / 9} w="10%" minW="68px">
        <Button
          _hover={
            !buttonIsDisabledValidation.playButton
              ? {
                  backgroundColor: 'red',
                  color: 'backgroundSecondary',
                }
              : {}
          }
          _active={{ backgroundColor: 'red', color: 'backgroundSecondary' }}
          color="red"
          bgColor="transparent"
          borderWidth="2px"
          borderColor="red"
          aria-label="Play button"
          leftIcon={playButtonText === 'Restart' ? <TbRefresh /> : <TbPlayerPlay />}
          disabled={buttonIsDisabledValidation.playButton}
          onClick={() => handleStart()}
        >
          {playButtonText}
        </Button>
      </AspectRatio>
    </Center>
  );
}

export default PageMemoryGame;
