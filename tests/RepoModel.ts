// RepoModel.ts
export class RepoRequest {
    private _name: string;
    private _description?: string;
    private _private?: boolean;

    constructor(name: string, description?: string, isPrivate: boolean = false) {
        this._name = name;
        this._description = description;
        this._private = isPrivate;
    }

    // Getter for name
    public get name(): string {
        return this._name;
    }

    // Setter for name with validation
    public set name(newName: string) {
        if (newName.length < 3) {
            throw new Error("❌ Repository name must be at least 3 characters long.");
        }
        this._name = newName;
    }

    // Getter for description
    public get description(): string | undefined {
        return this._description;
    }

    // Setter for description
    public set description(newDescription: string | undefined) {
        this._description = newDescription;
    }

    // Getter for private
    public get isPrivate(): boolean | undefined {
        return this._private;
    }

    // Setter for private
    public set isPrivate(value: boolean | undefined) {
        this._private = value;
    }
}


export class RepoResponse {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    description?: string;
    html_url: string;
}
