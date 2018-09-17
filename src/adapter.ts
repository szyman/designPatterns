//https://www.tutorialspoint.com/design_pattern/adapter_pattern.htm

interface MediaPlayer {
    play(audioType: string, fileName: string): void;
}

interface AdvancedMediaPlayer {
    playVlc(fileName: string): void;
    playMp4(fileName: string): void;
}

class VlcPlayer implements AdvancedMediaPlayer {
    playVlc(fileName: string): void {
        console.log(`Playing vlc file. Name: + ${fileName}`);
    }

    playMp4(fileName: string): void {
        //do nothing
    }
}

class Mp4Player implements AdvancedMediaPlayer {
    playVlc(fileName: string): void {
        throw new Error("Method not implemented.");
    }

    playMp4(fileName: string): void {
        console.log(`Playing Mp4 file. Name: + ${fileName}`);
    }
}

class MediaAdapter implements MediaPlayer {
    advancedMediaPlayer: AdvancedMediaPlayer;

    constructor(audioType: string) {
        if (audioType === 'vlc') {
            this.advancedMediaPlayer = new VlcPlayer();
        } else if (audioType === 'mp4') {
            this.advancedMediaPlayer = new Mp4Player();
        }
    }

    play(audioType: string, fileName: string): void {
        if (audioType === 'vlc') {
            this.advancedMediaPlayer.playVlc(fileName);
        } else if (audioType === 'mp4') {
            this.advancedMediaPlayer.playMp4(fileName);
        }
    }
}

class AudioPlayer implements MediaPlayer {
    private mediaAdapter: MediaAdapter;

    play(audioType: string, fileName: string): void {
        if (audioType === 'mp3') {
            console.log(`Playing Mp3 file. Name: + ${fileName}`);
        } else if (audioType === 'vlc' || audioType === 'mp4') {
            this.mediaAdapter = new MediaAdapter(audioType);
            this.mediaAdapter.play(audioType, fileName);
        } else {
            console.log(`Invalid media. ${audioType} format not supported`);
        }
    }
}

export function AdapterPatternDemo() {
    let audioPlayer = new AudioPlayer();
    audioPlayer.play('mp3', 'aaa.mp3');
    audioPlayer.play('mp4', 'bbb.mp4');
    audioPlayer.play('vlc', 'ccc.vlc');
    audioPlayer.play('avi', 'ddd.avi');
}