// Emoji time formatting for Tasks plugin compatibility
// Returns emoji clock for a given time string (HH:mm)

const clockEmojis = [
    "🕛", "🕧", "🕐", "🕜", "🕑", "🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠",
    "🕕", "🕡", "🕖", "🕢", "🕗", "🕣", "🕘", "🕤", "🕙", "🕥", "🕚", "🕦"
];

export function getEmojiForTime(time: string): string {
    // time: "HH:mm"
    const [h, m] = time.split(":").map(Number);
    // Emoji clocks: 0 = 12:00, 1 = 12:30, 2 = 1:00, 3 = 1:30, ...
    let idx = ((h % 12) * 2) + (m >= 30 ? 1 : 0);
    return clockEmojis[idx];
}
