import { Args, Float, Int, Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class HelloWorldResolver {

  @Query(() => String, { description: 'This is the first resolver', name: 'FirstHello'} )
  helloWorld(): string {
    return 'Hello World!!!'
  }

  @Query( () => Float, {name: 'randomNumber'})
  randomNumber(): number {
    return Math.random() * 100;
  }

  @Query(()=> Int, { name: 'randomFromZeroTo', description: 'From zero to argument To (default 6)' })
  getRandomFromZeroTo( @Args('to', { nullable: true, type: () => Int }) to: number = 6): number {

    return Math.floor(Math.random() * to) + 1;

  }

}
