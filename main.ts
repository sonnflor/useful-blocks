//% weight=100 color=#0fbc11 icon="↻"
namespace usefulBlocks {
    //% block="repeat until %condition"
    //% condition.shadow=logic_boolean
    export function repeatUntil(condition: () => boolean, body: () => void): void {
        while (!condition()) {
            body();
        }
    }
}