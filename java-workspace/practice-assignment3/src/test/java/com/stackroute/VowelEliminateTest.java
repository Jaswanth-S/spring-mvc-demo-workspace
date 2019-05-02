package com.stackroute;
import org.junit.*;

import static junit.framework.Assert.assertNull;
import static junit.framework.TestCase.assertEquals;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertNotNull;

public class VowelEliminateTest {
    private static VowelEliminate vowelEliminate;


    @BeforeClass
    public static void setup() {
        // This methods runs, before running any one of the test case
        // This method is used to initialize the required variables
        vowelEliminate = new VowelEliminate();

    }

    @AfterClass
    public static void teardown() {
        // This method runs, after running all the test cases
        // This method is used to clear the initialized variables
        vowelEliminate= null;

    }
    @SuppressWarnings("deprecation")
    @Test
    public void testVowelEliminate()
    {
        assertEquals("testVowelEliminate(), checkVowelEliminate does not return correct values",
                new String[]{"nd","Grmny","Jpn","ntd Stts"},new String[]{"India","Germany","Japan","United States"});
        ass
    }
    @Test
    public void testVowelEliminateFailure()
    {
        assertNotNull("testVowelEliminate(), checkVowelEliminate does not return correct values",
                new String[]{"India"});
    }

}
