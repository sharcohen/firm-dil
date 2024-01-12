import { IssueLocation } from "../../../app/issues/infrastructure/types"

export const findRoomAndLevel = (
  locations: IssueLocation[]
): { room: string; level: string } => {
  const foundRooms: string[] = []
  const foundLevels: string[] = []

  for (const location of locations) {
    if (foundLevels.length > 1 && foundRooms.length > 1) {
      break
    }

    if (location.level && foundLevels.length <= 1) {
      const levels = location.level.split(";")
      foundLevels.push(...levels.map((l) => l.trim()))
    }

    if (location.roomNumber && foundRooms.length <= 1) {
      const rooms = location.roomNumber.split(";")
      foundRooms.push(...rooms.map((r) => r.trim()))
    }
  }

  return {
    level: foundLevels.length > 1 ? "MULTIPLE" : foundLevels[0],
    room: foundRooms.length > 1 ? "MULTIPLE" : foundRooms[0],
  }
}
