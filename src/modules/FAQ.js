import Accordion from '../components/Accordion';

function FAQ() {
    const items = [
        {
            id: 'l2kj5',
            label: 'Can education flashcards be used for all age groups?',
            content:
                'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
        },
        {
            id: 'lk2j35lkj',
            label: 'How do education flashcards work?',
            content:
                'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
        },
        {
            id: 'l1kj2i0g',
            label: 'Can education flashcards be used for test preparation?',
            content:
                'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
        },
    ];

    return (
        <div className='mt-10 flex justify-center items-center w-full'>
            <div className=' w-1/2 '>
                <div>
                    <span className='font-medium text-blue-900 text-3xl'>FAQ</span>
                </div>
                <div className='mt-4'>

                    <Accordion items={items} />
                </div>
            </div>
        </div>
    );
}

export default FAQ;
