CREATE TABLE [dbo].[Joke] (
    [Id]           INT            IDENTITY (1, 1) NOT NULL,
    [JokeQuestion] TEXT            NULL,
    [JokeAnswer]   TEXT NULL,
    CONSTRAINT [PK_Joke] PRIMARY KEY CLUSTERED ([Id] ASC)
);

