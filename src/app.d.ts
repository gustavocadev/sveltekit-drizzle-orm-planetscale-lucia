// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import('lucia-auth').AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}

	declare namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		// we omit the id property because lucia automatically generate it for us when we create a user
		type UserAttributes = {
			username: string;
			names: string;
			last_names: string;
		};
	}
}

export {};
