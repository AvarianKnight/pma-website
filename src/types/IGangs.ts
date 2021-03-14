interface Gangs {
	id: number;
	name: string;
	gangMembers: GangMembers[];
}

interface GangMembers {
	uniqueId: number;
	gangUid: number;
	name: string;
	backstory: string;
	rank: number;
	profilePhoto: string;
}


