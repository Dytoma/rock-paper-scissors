
export const playSound = async (sound) => {
    const audio = new Audio(sound);

    await audio.play();
}